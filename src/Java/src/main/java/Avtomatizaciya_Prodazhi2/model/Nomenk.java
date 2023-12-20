package Avtomatizaciya_Prodazhi2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_Prodazhi2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Номенк
 */
@Entity(name = "IISAvtomatizaciya_Prodazhi2Номенк")
@Table(schema = "public", name = "Номенк")
public class Nomenk {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номен")
    private String номен;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdIzmer")
    @Convert("EdIzmer")
    @Column(name = "ЕдИзмер", length = 16, unique = true, nullable = false)
    private UUID _edizmerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdIzmer", insertable = false, updatable = false)
    private EdIzmer edizmer;


    public Nomenk() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНомен() {
      return номен;
    }

    public void setНомен(String номен) {
      this.номен = номен;
    }


}