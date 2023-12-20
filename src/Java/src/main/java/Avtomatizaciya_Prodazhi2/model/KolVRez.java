package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: КолВРез
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2КолВРез")
@Table(schema = "public", name = "КолВРез")
public class KolVRez {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenk")
    @Convert("Nomenk")
    @Column(name = "Номенк", length = 16, unique = true, nullable = false)
    private UUID _nomenkid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenk", insertable = false, updatable = false)
    private Nomenk nomenk;


    public KolVRez() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}