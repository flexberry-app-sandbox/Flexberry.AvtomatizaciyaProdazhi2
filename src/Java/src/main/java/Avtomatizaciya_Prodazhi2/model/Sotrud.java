package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотруд
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2Сотруд")
@Table(schema = "public", name = "Сотруд")
public class Sotrud {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzh")
    @Convert("Dolzh")
    @Column(name = "Долж", length = 16, unique = true, nullable = false)
    private UUID _dolzhid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzh", insertable = false, updatable = false)
    private Dolzh dolzh;


    public Sotrud() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }


}